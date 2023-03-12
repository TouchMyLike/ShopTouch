import React from 'react'
import { categoriesData } from '@/hooks/useApi'

export default function Menu() {
  return (
    <div>
        <ul>
        {
        categoriesData?.categories.map((categorie, i) => (
            <li key={i}>{categorie.name}</li>
        ))
        }
        </ul>
    </div>
  )
}
