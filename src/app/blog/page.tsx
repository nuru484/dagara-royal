import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Search, Filter } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "The Future of Agricultural Investment in Ghana: Trends and Opportunities",
      excerpt:
        "Explore the emerging trends in Ghana's agricultural sector and discover why smart investors are turning their attention to sustainable farming initiatives.",
      author: "Dr. Emmanuel Boateng",
      date: "December 15, 2024",
      category: "Agriculture",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Student Housing: A Growing Investment Opportunity in Accra",
      excerpt:
        "With Ghana's university enrollment increasing by 40% over the past decade, student accommodation presents a lucrative investment opportunity.",
      author: "Nana Ama Osei",
      date: "December 10, 2024",
      category: "Real Estate",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "Sustainable Poultry Farming: Technology Meets Tradition",
      excerpt:
        "How modern technology is revolutionizing traditional poultry farming methods in Ghana, creating more efficient and profitable operations.",
      author: "Samuel Adjei",
      date: "December 8, 2024",
      category: "Poultry",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Market Analysis: Ghana's Economic Growth and Investment Climate",
      excerpt:
        "A comprehensive analysis of Ghana's current economic indicators and what they mean for potential investors in the agricultural and real estate sectors.",
      author: "Akosua Mensah",
      date: "December 5, 2024",
      category: "Investment",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "Building Partnerships: Working with Local Communities",
      excerpt:
        "Our approach to building sustainable partnerships with local communities and farmers to create mutually beneficial investment opportunities.",
      author: "Kwame Nkrumah Asante",
      date: "December 1, 2024",
      category: "Community",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Digital Innovation in Agriculture: Smart Farming Solutions",
      excerpt:
        "How digital technologies like IoT sensors, drones, and data analytics are transforming agricultural productivity in Ghana.",
      author: "Dr. Emmanuel Boateng",
      date: "November 28, 2024",
      category: "Technology",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Agriculture",
    "Real Estate",
    "Poultry",
    "Investment",
    "Community",
    "Technology",
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Agriculture: "bg-green-100 text-green-800",
      "Real Estate": "bg-blue-100 text-blue-800",
      Poultry: "bg-orange-100 text-orange-800",
      Investment: "bg-purple-100 text-purple-800",
      Community: "bg-pink-100 text-pink-800",
      Technology: "bg-indigo-100 text-indigo-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Insights &<span className="text-gradient-primary"> News</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stay updated with the latest trends, insights, and developments in
              Ghana&lsquo;s investment landscape, agriculture, and real estate
              sectors.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 h-12"
                />
              </div>
              <Button variant="outline" size="lg" className="px-6">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-8">
              Featured Article
            </h2>
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden border-0 shadow-medium hover-lift"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-[4/3] lg:aspect-auto">
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        width={80}
                        height={80}
                      />
                    </div>
                    <CardContent className="p-12 flex flex-col justify-center">
                      <Badge
                        className={`w-fit mb-4 ${getCategoryColor(
                          post.category
                        )}`}
                      >
                        {post.category}
                      </Badge>
                      <h3 className="font-heading text-3xl font-bold mb-4 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <Button variant="ghost" className="group">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold mb-12">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden border-0 shadow-soft hover-lift group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width={80}
                      height={80}
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge
                      className={`w-fit mb-3 ${getCategoryColor(
                        post.category
                      )}`}
                    >
                      {post.category}
                    </Badge>
                    <h3 className="font-heading text-xl font-bold mb-3 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding">
        <div className="container-custom">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
            <CardContent className="p-16 text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Stay Informed
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and never miss important updates
                about investment opportunities, market insights, and company
                news.
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
