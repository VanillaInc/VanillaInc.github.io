import { BaseSpinner } from './BaseSpinner.mjs';

class AnimatedSpinner extends BaseSpinner
{
    constructor(interval, frameCallback, frames)
    {
        super(interval, frameCallback, frames);
    }

    incrementFrame()
    {
        this.frameIndex = (this.frameIndex+1) % this.length;
    }
}

export { AnimatedSpinner };