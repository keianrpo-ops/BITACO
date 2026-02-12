
import React from 'react';

export interface PropertyFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
