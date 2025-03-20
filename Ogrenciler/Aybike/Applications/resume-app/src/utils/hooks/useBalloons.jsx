import { useCallback } from 'react';

export const useBalloons = () => {
    const createBalloons = useCallback(() => {
        const colors = ['#fd79a8', '#6c5ce7', '#0984e3', '#00b894', '#fdcb6e', '#ff7675']
        const balloonsContainer = document.getElementById('balloons-container')

        if (!balloonsContainer) return

        balloonsContainer.innerHTML = ''

        for (let i = 0; i < 10; i++) {
            const balloon = document.createElement('div')
            balloon.className = 'balloon'
            balloon.style.left = `${Math.random() * 100}vw`
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
            balloon.style.animationDuration = `${Math.random() * 5 + 10}s`
            balloon.style.animationDelay = `${Math.random() * 5}s`
            balloonsContainer.appendChild(balloon)
        }
    }, [])

    return { createBalloons }
}