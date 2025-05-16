
const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
        <p className="mt-1">Built By Brian Mwendwa</p>
      </div>
    </footer>
  );
};

export default Footer;
