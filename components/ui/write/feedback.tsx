/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F3tjEzTdUMi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from "react"
import { CardTitle, CardHeader, CardContent, CardDescription, Card } from "@/components/ui/card"
interface StarIconProps extends React.SVGProps<SVGSVGElement> {}

export default function Component() {
  return (
    <Card key="1" className="w-full flex-col p-6">
      <CardHeader className="text-center pb-0">
        <CardTitle className="text-2xl">Score</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <StarIcon className="w-6 h-6 fill-muted rounded-full" />
          <StarIcon className="w-6 h-6 fill-muted rounded-full" />
          <StarIcon className="w-6 h-6 fill-muted rounded-full" />
          <StarIcon className="w-6 h-6 fill-muted rounded-full" />
          <StarIcon className="w-6 h-6 fill-muted rounded-full" />
        </div>
      </CardContent>
      <CardContent className="flex flex-col gap-2">
        <div className="text-center">
          <CardTitle className="text-base">Feedback</CardTitle>
        </div>
        <div className="text-center">
          <CardDescription className="text-sm">The AI system will provide feedback here.</CardDescription>
        </div>
      </CardContent>
      <CardContent className="flex flex-col">
        <div className="text-center">
          <CardTitle className="text-base">Major mistakes</CardTitle>
        </div>
        <ul className="text-sm text-left">
          <li>Spelling errors</li>
          <li>Punctuation issues</li>
          <li>Lack of citations</li>
        </ul>
      </CardContent>
    </Card>
  )
}

function StarIcon(props: StarIconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }