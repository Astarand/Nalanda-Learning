import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getRelatedPosts } from '../../../lib/blogData';
import BlogSingleClient from './BlogSingleClient';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found - Nalanda Learning',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - Nalanda Learning Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogSinglePage({ params }) {
  // Get the blog post data
  const blogPost = getBlogPostBySlug(params.slug);

  // If post not found, show 404
  if (!blogPost) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);

  return (
    <>
      {/* Breadcrumb area start here */}
      <section className="breadcrumb-area" data-background="/images/banner/banner-inner.jpg">
        <div className="container">
          <div className="breadcrumb__wrp">
            <div className="breadcrumb__item">
              <h1 className="title">Blog Details</h1>
              <nav aria-label="Breadcrumb">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i className="fa-light fa-angle-right" />
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <i className="fa-light fa-angle-right" />
                  </li>
                  <li>{blogPost.title}</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb area end here */}

      {/* Blog Single Area Start */}
      <section className="blog-single-area pt-130 pb-130">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <article className="blog-single__content">
                {/* Featured Image */}
                <div className="blog-single__image mb-40">
                  <Image
                    src={blogPost.image}
                    alt={blogPost.title}
                    width={800}
                    height={400}
                    className="w-100"
                    priority
                  />
                </div>

                {/* Article Meta */}
                <div className="blog-single__meta mb-30">
                  <div className="meta-items">
                    <span className="category">{blogPost.category}</span>
                    <span className="date">
                      <i className="fa-light fa-calendar"></i>
                      <time dateTime={blogPost.date}>
                        {new Date(blogPost.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </span>
                    <span className="read-time">
                      <i className="fa-light fa-clock"></i> {blogPost.readTime}
                    </span>
                  </div>
                  <div className="tags">
                    {blogPost.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Article Title */}
                <h1 className="blog-single__title mb-30">{blogPost.title}</h1>

                {/* Article Excerpt */}
                <div className="blog-single__excerpt mb-40">
                  <p className="lead">{blogPost.excerpt}</p>
                </div>

                {/* Article Content */}
                <div
                  className="blog-single__body"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Author Bio */}
                <div className="blog-single__author mt-60">
                  <div className="author-card">
                    <div className="author-avatar">
                      <Image
                        src={blogPost.author.avatar}
                        alt={blogPost.author.name}
                        width={80}
                        height={80}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="author-info">
                      <h5 className="author-name">{blogPost.author.name}</h5>
                      <p className="author-title">{blogPost.author.title}</p>
                    </div>
                  </div>
                </div>

                {/* Social Share */}
                <div className="blog-single__share mt-50">
                  <h6>Share this article:</h6>
                  <div className="share-buttons">
                    <a href="#" className="share-btn facebook" aria-label="Share on Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="share-btn twitter" aria-label="Share on Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="share-btn linkedin" aria-label="Share on LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="share-btn whatsapp" aria-label="Share on WhatsApp">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <aside className="blog-sidebar">
                {/* Search Widget */}
                <div className="sidebar-widget search-widget mb-40">
                  <h5 className="widget-title">Search Articles</h5>
                  <form className="search-form" role="search">
                    <label htmlFor="search-input" className="sr-only">
                      Search articles
                    </label>
                    <input
                      id="search-input"
                      type="text"
                      placeholder="Search..."
                      aria-label="Search articles"
                    />
                    <button type="submit" aria-label="Submit search">
                      <i className="fa-light fa-search"></i>
                    </button>
                  </form>
                </div>

                {/* Categories Widget */}
                <div className="sidebar-widget categories-widget mb-40">
                  <h5 className="widget-title">Categories</h5>
                  <ul className="categories-list">
                    <li>
                      <a href="#">
                        Education Policy <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Teacher Training <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Technology <span>(15)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Early Childhood <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Research <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Best Practices <span>(9)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Recent Posts Widget */}
                <div className="sidebar-widget recent-posts-widget mb-40">
                  <h5 className="widget-title">Recent Articles</h5>
                  <div className="recent-posts">
                    <div className="recent-post-item">
                      <div className="post-thumb">
                        <Image
                          src="/images/blog/recent-1.jpg"
                          alt="Recent post"
                          width={80}
                          height={60}
                        />
                      </div>
                      <div className="post-content">
                        <h6>
                          <a href="#">Digital Transformation in Indian Education</a>
                        </h6>
                        <span className="post-date">March 10, 2024</span>
                      </div>
                    </div>
                    <div className="recent-post-item">
                      <div className="post-thumb">
                        <Image
                          src="/images/blog/recent-2.jpg"
                          alt="Recent post"
                          width={80}
                          height={60}
                        />
                      </div>
                      <div className="post-content">
                        <h6>
                          <a href="#">Building Resilient Learning Communities</a>
                        </h6>
                        <span className="post-date">March 8, 2024</span>
                      </div>
                    </div>
                    <div className="recent-post-item">
                      <div className="post-thumb">
                        <Image
                          src="/images/blog/recent-3.jpg"
                          alt="Recent post"
                          width={80}
                          height={60}
                        />
                      </div>
                      <div className="post-content">
                        <h6>
                          <a href="#">The Role of AI in Personalized Learning</a>
                        </h6>
                        <span className="post-date">March 5, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Newsletter Widget */}
                <div className="sidebar-widget newsletter-widget">
                  <h5 className="widget-title">Stay Updated</h5>
                  <p>
                    Subscribe to our newsletter for the latest insights on education and technology.
                  </p>
                  <form className="newsletter-form">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      placeholder="Your email address"
                      required
                    />
                    <button type="submit" className="btn-one">
                      Subscribe
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>

          {/* Related Posts */}
          <div className="related-posts mt-100">
            <div className="section-header text-center mb-60">
              <h3>Related Articles</h3>
            </div>
            <div className="row g-4">
              {relatedPosts.map((post) => (
                <div key={post.id} className="col-lg-4">
                  <article className="blog-card">
                    <div className="blog-card__image">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-100"
                        loading="lazy"
                      />
                    </div>
                    <div className="blog-card__content">
                      <h5 className="blog-card__title">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h5>
                      <p className="blog-card__excerpt">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`} className="read-more">
                        Read More <i className="fa-light fa-arrow-right"></i>
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Blog Single Area End */}

      {/* Client-side functionality */}
      <BlogSingleClient />
    </>
  );
}
