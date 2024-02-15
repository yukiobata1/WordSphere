'use client';

import Editor from "@/components/ui/write/editor";
import Topic from "@/components/ui/write/topic";
import Feedback from "@/components/ui/write/feedback";
import React, { useState } from "react";

export default function WritePage() {
  const onSubmit = (text: String) => {
    // 1. Send the text to a server
    // 2. Get the stream given by the server
    // 3. Save
    console.log('Submitted text:', text);
    // Here you can add your logic to send the text to a server or process it further
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Topic/>
          <Editor onSubmit={onSubmit}/>
        </div>
        <div className="md:w-1/2">
          <Feedback />
        </div>
      </div>
    </div>
  );
}