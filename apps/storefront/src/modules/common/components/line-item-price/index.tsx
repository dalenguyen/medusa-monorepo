import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { Region } from "@medusajs/medusa"
import clsx from "clsx"
import { formatAmount } from "medusa-react"
import { CalculatedVariant } from "types/medusa"

type LineItemPriceProps = {
  variant: CalculatedVariant
  region: Region
  quantity: number
  style?: "default" | "tight"
}

const LineItemPrice = ({
  variant,
  region,
  quantity,
  style = "default",
}: LineItemPriceProps) => {
  const hasReducedPrice = variant.calculated_price < variant.original_price

  return (
    <div className="flex flex-col text-gray-700 text-right">
      <span
        className={clsx("text-base-regular", {
          "text-rose-600": hasReducedPrice,
        })}
      >
        {formatAmount({
          amount: variant.calculated_price * quantity,
          region: region,
          includeTaxes: false,
        })}
      </span>
      {hasReducedPrice && (
        <>
          <p>
            {style === "default" && (
              <span className="text-gray-500">Original: </span>
            )}
            <span className="line-through">
              {formatAmount({
                amount: variant.original_price * quantity,
                region: region,
                includeTaxes: false,
              })}
            </span>
          </p>
          {style === "default" && (
            <span className="text-rose-600">
              -
              {getPercentageDiff(
                variant.original_price,
                variant.calculated_price
              )}
              %
            </span>
          )}
        </>
      )}
    </div>
  )
}

export default LineItemPrice
