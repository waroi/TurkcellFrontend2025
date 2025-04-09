import { useState, useEffect } from 'react';
import { LOADING_TIMEOUT, INITIAL_LOADING_STATE } from './../constans/giftConstants';
import { useConfetti } from './useConfetti';
import { useBalloons } from './useBalloons';

export const useGiftView = () => {
    const [loading, setLoading] = useState(INITIAL_LOADING_STATE)
    // const { createConfetti } = useConfetti()
    // const { createBalloons } = useBalloons()

    useEffect(() => {
        // createConfetti()
        // createBalloons()

        const timer = setTimeout(() => {
            setLoading(false)
        }, LOADING_TIMEOUT)

        return () => clearTimeout(timer)
    }, [])

    return { loading }
}