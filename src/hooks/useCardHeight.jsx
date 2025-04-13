'use client';

import { useState, useEffect, useRef } from 'react';
import { CARD_PADDING } from '@/constants';

export default function useCardHeight() {
  const [cardHeight, setCardHeight] = useState(null);

  const backRef = useRef();

  useEffect(() => {
    setCardHeight(backRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    if (cardHeight === null) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const contentHeight = entries[0].contentRect.height;
      setCardHeight(contentHeight + CARD_PADDING * 2);
    });

    observer.observe(backRef.current);

    return () => observer.disconnect();
  }, [cardHeight]);

  return [backRef, cardHeight];
}
