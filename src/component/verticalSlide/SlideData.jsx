import VerticalSlider from "./VerticalSlider";

const SlidesData = [
    {
        image: '../../images/img_patterns.png',
        alt: 'Image 1',
        title: 'Slide 1',
        description: 'Description for slide 1',
    },
    {
        image: '../../images/img_rectangle_440_316x510.png',
        alt: 'Image 2',
        title: 'Slide 2',
        description: 'Description for slide 2',
    },
    // Add more slides as needed
];

// Usage of VerticalSlider component
<VerticalSlider slides={SlidesData} />
