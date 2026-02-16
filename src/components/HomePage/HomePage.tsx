import { Heading, TextComponent } from "../atoms/Typography";
import { Button } from "antd";
import { homeStep } from "./tour/homeStep";
import Joyride, { type CallBackProps, STATUS } from "react-joyride";
import HomeTooltip from "./tour/HomeTooltip";
import { useEffect, useState } from "react";

const home = () => {
  const [runTour, setRunTour] = useState(false);
  const [isWalkthroughFinished, setIsWalkthroughFinished] = useState(0);

  useEffect(() => {
    if (isWalkthroughFinished === 0) {
      setRunTour(true);
    } else {
      setRunTour(false);
    }
  }, [isWalkthroughFinished]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRunTour(false);
      setIsWalkthroughFinished(1);
    }
  };

  return (
    <>
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        run={runTour}
        steps={homeStep}
        disableOverlayClose={true}
        disableCloseOnEsc={true}
        tooltipComponent={HomeTooltip}
      />
      <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:justify-between items-center mb-10">
        <div className="flex flex-col space-y-1.5 text-center! md:text-left!">
          <TextComponent className="text-[#6B7280]! text-base!">
            Hi Fachry Mochammad
          </TextComponent>
          <Heading
            level={1}
            className="text-[#4B5563]! m-0! text-2xl! md:text-4xl!"
          >
            Welcome, Home lads
          </Heading>
        </div>

        <div className="flex gap-2 items-center justify-end">
          <div id="notification-tour">
            <Button
              size="large"
              className="w-full! md:w-auto! text-sm! p-2!"
              // onClick={() => setOpenModal(true)}
            >
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
