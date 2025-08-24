import React from 'react'
import Header from "@/components/Header"
import Filters from '@/components/Filters'
import Products from '@/components/Products'

export default function page() {
  return (
    <>
    <Header />
    <Filters />
    <Products />
    </>
  )
}
