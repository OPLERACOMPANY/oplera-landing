'use client'

/**
 * Omni Support Agent Product Page
 * 
 * Example of using the ProductPageTemplate with JSON data.
 * This approach makes it extremely easy to create new product pages.
 */

import { ProductPageTemplate } from '@/components/ProductPageTemplate'
import productData from '@/data/products/omni-support.json'

export default function OmniSupportPage() {
  return <ProductPageTemplate data={productData as any} />
}

