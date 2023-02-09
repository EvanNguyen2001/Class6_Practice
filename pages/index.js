import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {userEffect,useState} from 'react'
import{ useRouter} from 'next/router'
import Survey from './Survey'

export default function Home(){
  return (
    <>
      <Survey/>
    </>
  )
}

