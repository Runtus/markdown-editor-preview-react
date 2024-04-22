import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./worker.ts"

// createRoot => 可以使得所有setState都是异步执行的
ReactDOM.createRoot(document.getElementById('root')!).render(
  // React.StrictMode 导致在dev模式下 组件渲染了两次
  // 参考链接：https://react.docschina.org/learn/keeping-components-pure#detecting-impure-calculations-with-strict-mode
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// React.createElement("div", null, "123")