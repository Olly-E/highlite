"use client";
import React from "react";
import clsx from "clsx";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  className?: string;
  isRequired?: boolean;
  infoHint?: boolean;
  infoHintText?: string;
};

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    { className, isRequired, infoHintText, infoHint = false, ...props },
    ref
  ) => {
    const id = React.useId();
    return (
      <label
        ref={ref}
        className={clsx(
          "mb-2 flex items-center space-x-0.5 text-sm text-black relative leading-[13.5px] font-semibold",
          infoHint && "mb-3",
          className
        )}
        {...props}
      >
        <span>
          {props.children}{" "}
          {isRequired ? <span className="text-red-400">*</span> : ""}
        </span>
        <span className="text-gray-250 font-light"></span>
        {infoHint && (
          <div className="flex items-center gap-2 group">
            <div
              className="px-[11px] py-2.25 hidden absolute left-17.5 w-fit line-clamp-3 max-w-75 group-hover:block rounded-md border border-gray-150 bg-gray-50"
              key={id}
            >
              <p className="text-xs">{infoHintText}</p>
            </div>
          </div>
        )}
      </label>
    );
  }
);

Label.displayName = "Label";
