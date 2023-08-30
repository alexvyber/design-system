import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Headings, Text } from "@/components/katzen/typography"
import { cx } from "cvax"
import { headingsConfigs } from "@/components/katzen/typography/headings"
import { textConfigs } from "@/components/katzen/typography/text"

const sizing = [
  ["0", "w-0"],
  ["0.5", "w-0.5"],
  ["1", "w-1"],
  ["1.5", "w-1.5"],
  ["2", "w-2"],
  ["2.5", "w-2.5"],
  ["3", "w-3"],
  ["3.5", "w-3.5"],
  ["4", "w-4"],
  ["5", "w-5"],
  ["6", "w-6"],
  ["7", "w-7"],
  ["8", "w-8"],
  ["9", "w-9"],
  ["10", "w-10"],
  ["11", "w-11"],
  ["12", "w-12"],
  ["14", "w-14"],
  ["16", "w-16"],
  ["20", "w-20"],
  ["24", "w-24"],
  ["28", "w-28"],
  ["32", "w-32"],
  ["36", "w-36"],
  ["40", "w-40"],
  ["44", "w-44"],
  ["48", "w-48"],
  ["52", "w-52"],
  ["56", "w-56"],
  ["60", "w-60"],
  ["64", "w-64"],
  ["72", "w-72"],
  ["80", "w-80"],
  ["96", "w-96"],
]

const texts = {
  default: "default",
  small: "small",
  large: "large",
  subtle: "subtle",
}

const sizes = sizing.map((item) => ({
  item: item[0],
  rem: parseFloat(item[0]) / 4,
  px: parseFloat(item[0]) * 4,
}))

const headings = {
  pageHeader: "Page Header",
  h1: "Header 1",
  h2: "Header 2",
  h3: "Header 3",
  h4: "Header 4",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      {(
        Object.keys(
          headingsConfigs.variants.variant
        ) as (keyof typeof headingsConfigs.variants.variant)[]
      ).map((variant) => (
        <Headings variant={variant}>{headings[variant]}</Headings>
      ))}

      <br />
      <hr />
      <br />

      {(
        Object.keys(textConfigs.variants.variant) as (keyof typeof textConfigs.variants.variant)[]
      ).map((variant) => (
        <Text variant={variant}>{texts[variant]}</Text>
      ))}

      <br />
      <hr />
      <br />

      <tbody>
        {sizes.map((item) => (
          <tr>
            <td className="px-3 py-1">{item.item}</td>
            <td className="px-3 py-1">{item.px} px</td>
            <td className="px-3 py-1">{item.rem} rem</td>
            <td className="px-3 py-1">
              <div
                className={cx("h-4 bg-blue-300", `w-${item.item}`)}
                // sstyle="width:0px"
              ></div>
            </td>
          </tr>
        ))}
      </tbody>

      <div className="w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
        <hr />
        <>
          <Text as="label" htmlFor="asdfasd">
            asdfasdf
          </Text>
          <Text as="span">asdfasdf</Text>
          <Text>asdfasdf!!!</Text>
          <Text as="blockquote">asdfasdf!!!</Text>
          <p>asdf</p>
          <Text as="blockquote" cite="asdfasdf">
            asdfasdf
          </Text>
          <Text as="div">asdfasdf</Text>
        </>

        <br />
        <hr />
        <br />
        <Headings as="h1">asdfasdf</Headings>
        <Headings as="h2">asdfasdf</Headings>
        <Headings as="h3">asdfasdf</Headings>
        <br />
        <hr />
        <br />

        <Headings as="h1" variant="pageHeader">
          asdfasdf
        </Headings>
        <Headings as="h2" variant="h1">
          asdfasdf
        </Headings>
        <Headings as="h3" variant="h2">
          asdfasdf
        </Headings>
        <Headings as="h3" variant="h3">
          asdfasdf
        </Headings>
        <Headings as="h3" variant="h4">
          asdfasdf
        </Headings>
        <br />
        <hr />
        <br />
      </div>
    </main>
  )
}
