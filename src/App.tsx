import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import AuthButton from './components/AuthButton';
import Header from './components/Header';
import Trending from './components/Trending';

function App() {

    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4">
            <Nav />
            <main className="
                lg:col-span-4 md:col-span-3 bg-cyan-50
                px-12 py-6
            ">
                <AuthButton />
                <Header />
                <Trending />
            </main>
        </div>
    )
}

export default App
