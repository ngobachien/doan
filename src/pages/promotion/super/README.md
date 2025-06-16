# Summer Sale Promotion Page

## Overview
This page contains the Summer Sale promotion with multiple sections including the main banner and new friend discount offer.

## Components

### 1. SummerSaleBanner
- Main promotional banner for Summer Sale
- Features gradient background and animated elements
- Responsive design for all screen sizes

### 2. NewFriendDiscount
- **NEW COMPONENT** - Special discount section for new customers
- Features:
  - Dynamic date calculation (7-day validity period)
  - Copy-to-clipboard functionality for discount codes
  - Beautiful billiard-themed background image
  - Floating ball animations
  - Responsive design with mobile-first approach

## Features

### NewFriendDiscount Component Features:
- **Discount Amount**: Up to 2,000,000 VND
- **Target Audience**: New customers only
- **Discount Code**: NEWFRIEND2M (copyable)
- **Validity**: 7 days from current date
- **Background Image**: High-quality billiard table image from Unsplash
- **Animations**: 
  - Floating billiard balls
  - Pulse effect on discount amount
  - Fade-in animation on load
  - Hover effects on buttons and images

### Responsive Design:
- **Desktop**: Side-by-side layout with image and text
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Stacked layout with centered content

## File Structure
```
src/pages/promotion/super/
├── uy.js                           # Main page component
├── uy.css                          # Page styles
├── README.md                       # This file
└── hci/
    ├── SummerSaleBanner.js         # Banner component
    ├── SummerSaleBanner.css        # Banner styles
    ├── NewFriendDiscount.js        # NEW: Discount component
    └── NewFriendDiscount.css       # NEW: Discount styles
```

## Usage
The page is accessible through the promotion routing system as 'promo1' in the main Promotion component.

## Image Source
The billiard background image is sourced from Unsplash:
- URL: https://images.unsplash.com/photo-1594736797933-d0401ba2fe65
- High quality (1000px width)
- Optimized for web performance
- Features professional billiard table setup

## Date Functionality
- **Start Date**: Current date (auto-calculated)
- **End Date**: 7 days from current date (auto-calculated)
- **Format**: DD/MM/YYYY
- **Updates**: Automatically updates based on current date

## Interactive Elements
1. **Copy Code Button**: Copies discount code to clipboard with visual feedback
2. **Buy Now Button**: Smooth scroll to top functionality
3. **Hover Effects**: Enhanced user experience with smooth transitions
4. **Floating Animations**: Engaging visual elements

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoints: 1024px, 768px, 480px
