import React from 'react'

export default function ProdcutPage({ params }) {
  return (
    <main>
        <h1 className='text-center font-bold text-2xl'>
            محصول : {params.slug}
        </h1>
    </main>
  )
}
