import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider, googleLogout } from "@react-oauth/google";
import Header from "./components/Header";
import CartModal from "./components/CartModal";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
import ProductModal from "./components/ProductModal";
import Sidebar from "./components/Sidebar";
import "./app.css";
import { Footer } from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const handleLoginSuccess = (response) => {
    setUser(response);
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterProducts(e.target.value, categoryFilter);
  };

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
    filterProducts(searchQuery, category);
  };

  const filterProducts = (search, category) => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
  };

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const openProductModal = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}
    >
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          toggleCartModal={toggleCartModal}
          cart={cart}
          user={user}
          handleLogout={handleLogout}
          handleLoginSuccess={handleLoginSuccess}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        />

        <CartModal
          showCartModal={showCartModal}
          toggleCartModal={toggleCartModal}
          cart={cart}
        />

        <div className="flex flex-col lg:flex-row">
          <Sidebar
            categories={categories}
            handleCategoryClick={handleCategoryClick}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            darkMode={darkMode}
          />

          <ProductList
            currentProducts={currentProducts}
            openProductModal={openProductModal}
            addToCart={addToCart}
            darkMode={darkMode}
          />
        </div>

        <Pagination
          filteredProducts={filteredProducts}
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          handlePaginationClick={handlePaginationClick}
        />

        <ProductModal
          selectedProduct={selectedProduct}
          closeProductModal={closeProductModal}
        />
        <Footer darkMode={darkMode} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
