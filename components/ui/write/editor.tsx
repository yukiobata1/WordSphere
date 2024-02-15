'use client';

import React, { useState, ChangeEvent } from 'react';
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface EditorProps {
  onSubmit: (text: string) => void; // Define the type of the onSave prop function
}

const Editor: React.FC<EditorProps> = ({ onSubmit }) => {
    const [text, setText] = useState('');
    // Function to handle text changes
    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    };

    const autoSaveText = (text: String, interval: Number) => {
      console.log('Auto saving text:', text);
    }

    return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <div>Input your writing below.</div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="writing">Writing</Label>
          <Textarea
            className="min-h-[200px]"
            id="writing"
            placeholder="Start writing your story here."
            value={text}
            onChange={handleTextChange} // Change the value of the text state 
          />
        </div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="word-count">Word Count</Label>
          <div className="font-semibold">{text.split(/\s+/).filter(Boolean).length}</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto" onClick={() => onSubmit(text)}>Submit</Button>
      </CardFooter>
    </Card>
  )
}

export default Editor;