Claro, aquí tienes el código Markdown completo para tu README:

```markdown
# React Native Expo TypeScript Project

This is a React Native project built with Expo and TypeScript. It includes several components and screens for a mobile app.

## Table of Contents

- [Installation](#installation)
- [Components](#components)
- [Screens](#screens)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd project-directory
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Follow the Expo development server instructions to run the app on your desired platform (iOS or Android).

## Components

### Button Component

The Button component is a customizable button with text and an optional onPress callback.

```jsx
import { Text, Pressable, StyleSheet } from "react-native";
import React, { FC } from "react";

// Usage example:
// <Button text="Click Me" onPress={() => handleButtonClick()} />
```

### Card Component

The Card component displays product information with an image, title, and price.

```jsx
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { FC } from 'react'

// Usage example:
// <Card item={productData} onPress={() => handleCardClick()} />
```

### ImageCarousel Component

The ImageCarousel component displays a horizontal carousel of images.

```jsx
import { FlatList, StyleSheet, Image, View, useWindowDimensions } from 'react-native'
import { FC, useCallback, useState, useRef } from 'react'
import React from 'react';

// Usage example:
// <ImageCarousel images={imageUrls} />
```

### QuantitySelector Component

The QuantitySelector component allows users to select a quantity with plus and minus buttons.

```jsx
import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { FC } from 'react'

// Usage example:
// <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
```

## Screens

### Home Screen

The Home Screen displays a list of products using the Card component.

```jsx
import { View, FlatList } from 'react-native'
import React from 'react'
import Card from '../../components/Card';

// Usage example:
// <HomeScreen navigation={navigation} />
```

### Product Screen

The Product Screen displays detailed information about a product, including images, options, and quantity selection.

```jsx
import { Text, SafeAreaView, ScrollView } from 'react-native'
import React, { FC, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector'
import styles from './styles'
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel'

// Usage example:
// <ProductScreen route={route} />
```

## Usage

You can use the provided components and screens in your React Native application. Customize them according to your project requirements.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push the changes to your fork.
5. Create a pull request with a clear description of your changes.

## License

This project is licensed under the [License Name] License - see the [LICENSE.md](LICENSE.md) file for details.
```

Solo reemplaza `<repository-url>` con la URL real de tu repositorio Git y realiza cualquier otro ajuste necesario en el README. Este es un template completo que proporciona una visión general de la estructura de tu proyecto y los componentes, lo que facilita que otros comprendan y contribuyan a tu proyecto.
