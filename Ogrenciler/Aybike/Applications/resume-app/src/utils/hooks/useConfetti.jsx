import { useCallback } from 'react';

export const useConfetti = () => {
    const createConfetti = useCallback(() => {
        const colors = ['#fd79a8', '#6c5ce7', '#0984e3', '#00b894', '#fdcb6e', '#ff7675']
        const confettiContainer = document.getElementById('confetti-container')

        confettiContainer.innerHTML = ''

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div')
            confetti.className = 'confetti'
            confetti.style.left = `${Math.random() * 100}vw`
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
            confetti.style.width = `${Math.random() * 10 + 5}px`
            confetti.style.height = `${Math.random() * 10 + 5}px`
            confetti.style.animationDuration = `${Math.random() * 3 + 3}s`
            confetti.style.animationDelay = `${Math.random() * 5}s`
            confettiContainer.appendChild(confetti)
        }
    }, [])

    return { createConfetti }
}