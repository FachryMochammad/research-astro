import { Button } from "antd";
import { type TooltipRenderProps } from "react-joyride";

function HomeTooltip({
  backProps,
  continuous,
  index,
  isLastStep,
  primaryProps,
  step,
  tooltipProps,
}: TooltipRenderProps) {
  const primaryClick = primaryProps.onClick;
  const backClick = backProps.onClick;

  const { style, ...otherTooltipProps } =
    tooltipProps as React.HTMLAttributes<HTMLDivElement>;

  return (
    <div
      {...otherTooltipProps}
      style={{
        ...style,
        padding: 12,
        borderRadius: 8,
        overflow: "hidden",
        maxWidth: 420,
        minWidth: 290,
        backgroundColor: "white",
      }}
    >
      <div className="py-3 px-2">
        {step.title && (
          <div className=" text-xl font-bold mb-4">{step.title}</div>
        )}
        {step.content && (
          <div style={{ color: "#535474" }} className="text-md font-thin">
            {step.content}
          </div>
        )}
      </div>

      <div>
        {!isLastStep && index === 0 ? (
          <Button
            size="large"
            type="primary"
            className="w-full mt-6"
            onClick={primaryClick}
          >
            <span id="continuous">Mulai Panduan</span>
          </Button>
        ) : (
          <div className="flex flex-row gap-2 justify-end">
            {index > 0 && (
              <Button size="middle" type="default" onClick={backClick}>
                {/* Terapkan onClick Back */}
                <span id="back">Sebelumnya</span>
              </Button>
            )}
            <Button size="middle" type="primary" onClick={primaryClick}>
              {/* Terapkan onClick Next/Close */}
              <span id={continuous ? "next" : "close"}>
                {isLastStep ? "Selanjutnya" : "Next"}
              </span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeTooltip;
