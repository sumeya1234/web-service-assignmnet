package com.example.productservice;
import org.springframework.web.bind.annotation.*;
import java.util.*;
@RestController
@RequestMapping("/api/products")
public class ProductController {
    private List<Product> products = new ArrayList<>();
    public ProductController() {
        products.add(new Product(1, "Laptop", 1200.0));
        products.add(new Product(2, "Smartphone", 800.0));
        products.add(new Product(3, "Headphones", 150.0));
    }
    @GetMapping
    public List<Product> getAllProducts() {
        return products;
    }
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable int id) {
        return products.stream()
                .filter(p -> p.getId() == id)
                .findFirst()
                .orElse(null);
    }
    @PostMapping
    public Product addProduct(@RequestBody Product newProduct) {
        products.add(newProduct);
        return newProduct;
    }
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product updatedProduct) {
        Product existing = products.stream().filter(p -> p.getId() == id).findFirst().orElse(null);
        if (existing != null) {
            existing.setName(updatedProduct.getName());
            existing.setPrice(updatedProduct.getPrice());
        }
        return existing;
    }
    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable int id) {
        products.removeIf(p -> p.getId() == id);
        return "Product with ID " + id + " deleted successfully.";
    }
}
