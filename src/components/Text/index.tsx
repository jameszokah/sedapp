import React from "react";

const sizeClasses = {
  txtRobotoRomanBold24: "font-bold font-roboto",
  txtRobotoRomanRegular12Black900: "font-normal font-roboto",
  txtRobotoRomanMedium12: "font-medium font-roboto",
  txtRobotoRomanMedium12Black90075: "font-medium font-roboto",
  txtRobotoRomanSemiBold18: "font-roboto font-semibold",
  txtRobotoRomanMedium18Gray700ea: "font-medium font-roboto",
  txtRobotoRomanRegular12Gray500: "font-normal font-roboto",
  txtRobotoRomanExtraBold36: "font-extrabold font-roboto",
  txtRobotoRomanExtraBold14: "font-extrabold font-roboto",
  txtRobotoRomanMedium12Black900aa: "font-medium font-roboto",
  txtRobotoRomanMedium18Black900ce: "font-medium font-roboto",
  txtRobotoRomanRegular11Black9005e: "font-normal font-roboto",
  txtRobotoRomanMedium18: "font-medium font-roboto",
  txtRobotoRomanRegular12: "font-normal font-roboto",
  txtRobotoRomanRegular11: "font-normal font-roboto",
  txtRobotoRomanRegular14: "font-normal font-roboto",
  txtRobotoRomanExtraBold14Black900c9: "font-extrabold font-roboto",
  txtRobotoRomanBold14: "font-bold font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
