import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Topic() {
    const topic = "Some people think social media improves communication, but others feel the drawbacks are more significant. What's your view? Please explain with examples"
    return (
        
      <Card>
      <CardHeader>
        <CardTitle>Social Media</CardTitle>
        {/* <CardDescription>
            
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>{topic}</p>
      </CardContent>
      <CardFooter>
        <p>Time limit: 20 minutes</p>
      </CardFooter>
      <CardFooter>
        <p>You should write more than 100 words.</p>
      </CardFooter>
    </Card>
      );
}
