import { BaseSpinner } from './BaseSpinner.mjs';

class RandomSpinner extends BaseSpinner
{
    constructor(interval, frameCallback, frames)
    {
        super(interval, frameCallback, frames);
    }

    incrementFrame()
    {
        let f = this.getRandomIndex();

        while (this.frameIndex == f) f = this.getRandomIndex();

        this.frameIndex = f;
    }

    getRandomIndex()
    {
        return Math.floor(Math.random() * this.length);
    }
}

export { RandomSpinner };