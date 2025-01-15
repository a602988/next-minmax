'use client'
import React from 'react'

// Define the type for our language data
interface Language {
  id: string;
  title: string;
  native: string;
  icon?: string;
  default: boolean;
}

interface DataProps {
  languages: Language[];
}

export default function LanguageSwitcherListApi({ languages }: DataProps) {
  return (
    <ul>
      {languages.map((language) => (
        <li
            key={language.id}
            className={`list-item ${language.default ? 'current' : ''}`}
        >
          {language.icon && <span className={language.icon}></span>}
          {language.title}
        </li>
      ))}
    </ul>
  )
}
