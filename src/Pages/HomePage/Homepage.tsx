function HomePage() {
  const handleLogin = () => {
    // Get the current origin and append the desired path
    const homepageURL = `${window.location.origin}/Home`;
    const loginURL = `https://dev-openapi.5paisa.com/WebVendorLogin/VLogin/Index?VendorKey=Cn5p1aBA7YllUrNuHiRTy1igrxOt0cWx&ResponseURL=${homepageURL}`;

    // Redirect to the dynamically generated homepage URL after login
    window.location.href = loginURL;
  };

  return (
    <div>
      <p>Hii Mujeeb</p>
      <button onClick={handleLogin}>Login to 5Paisa</button>
    </div>
  );
}

export default HomePage;
