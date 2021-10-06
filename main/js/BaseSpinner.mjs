class BaseSpinner
{
    constructor(interval, frameCallback, frames)
    {
        this.interval = interval;

        this.reset();

        this.updateFrames(frames);

        this.frameCallback = frameCallback;
    }

    updateFrames(frames)
    {
        this.frames = frames;
        this.length = frames.length;
    }

    frame()
    {
        this.incrementFrame();

        this.frameCallback(this.frames[this.frameIndex]);
    }

    play()
    {
        this.process = setInterval(this.frame.bind(this), this.interval);
    }

    pause()
    {
        clearInterval(this.process);
    }

    stop()
    {
        clearInterval(this.process);
    }

    reset()
    {
        this.frameIndex = -1;
    }
}

export { BaseSpinner };