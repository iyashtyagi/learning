type EventType = "click" | "scroll" | "mousemove";

type ExcludedEvents = Exclude<EventType, "scroll">;

const handleEvent = (event: ExcludedEvents)=>{
    console.log(`Handling events: ${event}`);
}

handleEvent("click");