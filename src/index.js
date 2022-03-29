import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import E404 from "./routes/E404";
import Post from "./routes/Post";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:id" element={<Post />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<E404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
