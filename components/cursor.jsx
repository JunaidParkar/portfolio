// app/CursorClient.jsx
"use client";

import { useEffect } from "react";
import customCursor from "codereducer/cursor";
import Dkit from "codereducer/dKit";

export default function CursorClient({cursor="", magnets = []}) {
  useEffect(() => {
    if (cursor === "") return;
    let mgneticElements = [];
    const dom = Dkit.init();

    dom.id(cursor);
    let cr = dom.get()

    if (!cr) return
    console.log(cr)
  

    const c = new customCursor(cr, true);
    c.getCursor();
    document.body.style.cursor = "auto";

    magnets.forEach((magnet) => {
      let element = document.getElementById(magnet);
      if (element) {
        mgneticElements.push(element);
      }
    });

    if (mgneticElements.length > 0) {
      c.makeMagnet(mgneticElements);
    } else {
      console.warn("No magnetic elements found for the provided IDs");
    }

    return () => {
      dom.revert?.();
      c.revert?.();
    };
  }, []);

  return null;
}