import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Skeleton from 'react-loading-skeleton';
import { Blog, useFetchBlogs } from '../../../Hooks/useFetchData';
import { useNavigate } from 'react-router-dom';

interface Heading {
    id: string;
    title: string;
    tagName: string;
}

interface BlogDetailedSectionProps {
    detailedBlog: Blog;
}

const BlogDetailedSection: React.FC<BlogDetailedSectionProps> = ({ detailedBlog }) => {
    const blogDetailRef = useRef<HTMLDivElement>(null);
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [htmlContent, setHtmlContent] = useState('');
    const { blogs, isLoading } = useFetchBlogs();

    const testHtml = detailedBlog?.content[0]?.description

    useEffect(() => {
        if (!detailedBlog?.content) return;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = testHtml;

        const headingNodes = tempDiv.querySelectorAll('h2, h3');
        const headingArray: Heading[] = Array.from(headingNodes).map((node, index) => {
            const id = `heading-${index}`;
            node.id = id;
            return {
                id,
                title: node.textContent || '',
                tagName: node.tagName.toLowerCase(),
            };
        });

        setHeadings(headingArray);
        setHtmlContent(tempDiv.innerHTML);
    }, [detailedBlog?.content]);

    const handleTitleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 70;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="blog-content-section">
            <Helmet>
                <title>{detailedBlog?.meta_title}</title>
                <meta name="description" content={detailedBlog?.meta_description} />
                <link rel="canonical" href={`https://www.wisbato.com/blogs/${detailedBlog?.slug}`} />
            </Helmet>

            {isLoading ? (
                <LoadingBlogHeader />
            ) : (
                <BlogHeader title={detailedBlog?.title} />
            )}

            <div className="detailed-blog-seperate-section">
                <TableOfContents headings={headings} onTitleClick={handleTitleClick} />

                {isLoading ? (
                    <LoadingBlogContent />
                ) : (
                    <span className="subtitle-content-section" >
                        <div ref={blogDetailRef} dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    </span>
                )}

                {isLoading ? (
                    <LoadingSubBlogs />
                ) : (
                    <SubBlogs recentBlogs={blogs.slice(0, 3).filter((item) => item?.slug !== detailedBlog?.slug)} popularBlogs={blogs.slice(0, -1).filter((item) => item?.slug !== detailedBlog?.slug)} />
                )}
            </div>
        </div>
    );
};

const LoadingBlogHeader: React.FC = () => (
    <div className="detailed-blog-title-div">
        <p className="detailed-blog-title"><Skeleton width={150} height={30} /></p>
        <Skeleton width={100} height={30} />
    </div>
);

const BlogHeader: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="detailed-blog-title-div">
            <p className="detailed-blog-title">{title}</p>
            <ShareButton />
        </div>
    )
};

const ShareButton: React.FC = () => (
    <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.01472 15.8088C7.81776 15.8088 9.27942 14.3472 9.27942 12.5441C9.27942 10.7411 7.81776 9.27942 6.01472 9.27942C4.21167 9.27942 2.75001 10.7411 2.75001 12.5441C2.75001 14.3472 4.21167 15.8088 6.01472 15.8088Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.9853 9.27941C19.7883 9.27941 21.25 7.81775 21.25 6.01471C21.25 4.21166 19.7883 2.75 17.9853 2.75C16.1822 2.75 14.7206 4.21166 14.7206 6.01471C14.7206 7.81775 16.1822 9.27941 17.9853 9.27941Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.9853 21.25C19.7883 21.25 21.25 19.7883 21.25 17.9853C21.25 16.1822 19.7883 14.7206 17.9853 14.7206C16.1822 14.7206 14.7206 16.1822 14.7206 17.9853C14.7206 19.7883 16.1822 21.25 17.9853 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.0144 16.6359L8.9856 13.8935" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.1124 7.58176L8.88765 10.9771" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p>share</p>
    </button>
);

const TableOfContents: React.FC<{ headings: Heading[], onTitleClick: (id: string) => void }> = ({ headings, onTitleClick }) => (
    <div className='blog-title-navigate-section'>
        <p>table of content</p>
        <div className='blog-title-navigates'>
            {headings.map((item, i) => (
                <p key={i} onClick={() => onTitleClick(item.id)}>{item.title}</p>
            ))}
        </div>
    </div>
);

const LoadingBlogContent: React.FC = () => (
    <div className="subtitle-content-section" style={{ width: "100%" }}>
        <p className='paragraph' style={{ width: "100%" }}><Skeleton count={3} /></p>
        <div className="blog-points-section" style={{ width: "100%" }}>
            <p className='numbered-list'><Skeleton height={30} /></p>
            <p className='paragraph'><Skeleton count={3} /></p>
            <Skeleton height={200} />
        </div>
    </div>
);

const LoadingSubBlogs: React.FC = () => (
    <div className='sub-blogs-section' style={{ width: "100%" }}>
        <LoadingSubBlogSection />
        <LoadingSubBlogSection />
    </div>
);

const LoadingSubBlogSection: React.FC = () => (
    <div className='sub-blogs'>
        <p><Skeleton width={100} /></p>
        {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className='sub-blog'>
                <p><Skeleton height={130} /></p>
                <p><Skeleton count={2} /></p>
            </div>
        ))}
    </div>
);

const SubBlogs: React.FC<{ recentBlogs: Blog[], popularBlogs: Blog[] }> = ({ recentBlogs, popularBlogs }) => (
    <div className='sub-blogs-section'>
        <SubBlogSection title="recent posts" blogs={recentBlogs} />
        <SubBlogSection title="popular posts" blogs={popularBlogs} />
    </div>
);

const SubBlogSection: React.FC<{ title: string, blogs: Blog[] }> = ({ title, blogs }) => {
    const navigate = useNavigate()
    return (
        <div className='sub-blogs'>
            <p>{title}</p>
            {blogs.map((blog, i) => (
                <div style={{ cursor: "pointer" }} key={i} className='sub-blog' onClick={() => {
                    navigate(`/blogs/${blog.slug}`)
                    scrollTo(0, 0)
                }} >
                    <img className='sub-blog-img' src={blog.image} alt={blog.title} />
                    <p>{blog.title}</p>
                </div>
            ))}
        </div>
    )
};

export default BlogDetailedSection;


// import { Helmet } from 'react-helmet-async';
// import { Blog, useFetchBlogs } from '../../../Hooks/useFetchData';
// import Skeleton from 'react-loading-skeleton';
// import { useEffect, useRef, useState } from 'react';

// const BlogDetailedSection = ({ detailedBlog }: { detailedBlog: Blog }) => {
//     const blogDetailRef = useRef<any>();
//     const testHtml = `<p>In this content we will discuss some various elements that affect website design cost in Kerala. It will help you to budget effectively for your project. Here are some key factors:</p><ol><li><strong>Website Type: </strong>The complexity and functionality of the website—whether it's a Portfolio Website,&nbsp; simple blog, an<a href="https://www.wisbato.com/services/ecommerce-development">&nbsp;e-commerce website</a> ,Personal Website, Business Website, or a dynamic business portal—significantly influences the cost.</li><li><strong>Domain &amp; Hosting: </strong>The choice of domain name, Every domain name has different cost and hosting provider can vary in price, affecting the overall budget. Find your domain name with&nbsp;<a href="https://www.godaddy.com/en-in/domains">Godaddy</a>.</li></ol><h3>Website design cost for startup business</h3><p>When it comes to website design cost in Kerala, startup and small business owners have various options to choose from based on their budget and requirements. Our services are offered in three levels: Silver, Gold, and Platinum, each with different features and pricing.</p><figure class="table"><table><thead><tr><th>Sliver</th><th>Gold</th><th>Platinum</th></tr><tr><th>PLAN STARTING FROM</th><th>PLAN STARTING FROM</th><th>PLAN STARTING FROM</th></tr><tr><th><strong>RS: 5500/-</strong></th><th><strong>RS: 3500/-</strong></th><th><strong>RS: 8500/-</strong></th></tr></thead><tbody><tr><td><p>✓ 1 Month free Support</p><p>✓ Basic Design Features</p></td><td><p>✓ Free Support</p><p>✓ 3 Month free Support</p></td><td><p>✓ Free Support</p><p>✓ 6 Month free Support</p></td></tr></tbody></table></figure><p>Are you looking for a best web design on your business:&nbsp;<a href="https://www.wisbato.com/services/web-development">Check Now</a></p><h3>Website design cost for average business</h3><p>Grasping the website design cost in Kerala is crucial for typical businesses aiming to build or improve their online presence. Our web design services and experts cater to various business needs and requirements, with prices ranging from&nbsp;<strong>RS:8500 to RS:85000 for premium website designs.</strong></p><p>Investing in a professionally designed website is crucial for attracting and retaining customers, improving user experience, and enhancing your brand’s credibility. Our pricing packages are structured to provide value at every level, ensuring that businesses of all sizes can benefit from high-quality web design.</p>`
//     const [headings, setHeadings] = useState<{ title: string; id: string; tagName: string }[]>([]);
//     console.log("h2Elements", headings)

//     useEffect(() => {
//         if (blogDetailRef.current) {
//             const htmlString = testHtml;

//             if (htmlString) {
//                 const tempDiv = document.createElement('div');
//                 tempDiv.innerHTML = htmlString;

//                 const headingNodes = tempDiv.querySelectorAll('h2, h3');

//                 headingNodes.forEach((node, index) => {
//                     node.id = `heading-${index}`;
//                 });

//                 const headingArray: any = Array.from(headingNodes).map(node => ({
//                     id: node.id,
//                     title: node.innerHTML,
//                     tagName: node.tagName
//                 }));

//                 setHeadings(headingArray);
//             }
//         }
//     }, [testHtml]);

//     const handleTitleClick = (id: any) => {
//         const element = document.getElementById(id);
//         console.log(element, id)
//         if (element) {
//             const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 70; // Adjust 70 for any fixed header height
//             window.scrollTo({
//                 top: offsetPosition,
//                 behavior: 'smooth',
//             });
//         }
//     };

//     const { blogs, isLoading } = useFetchBlogs();

//     // const handleTitleClick = (id: any) => {
//     //     const element = document.getElementById(id);
//     //     console.log("element: ", element)
//     //     if (element) {
//     //         const topOffset = 120;
//     //         const elementPosition = element.getBoundingClientRect().top;
//     //         const offsetPosition = elementPosition - topOffset;

//     //         window.scrollBy({
//     //             top: offsetPosition,
//     //             behavior: 'smooth',
//     //         });
//     //     }
//     // };

//     return (
//         <div className="blog-content-section" >

//             {/* //// header meta tag */}
//             <Helmet>
//                 <title>{detailedBlog?.meta_title}</title>
//                 <meta name="description" content={detailedBlog?.meta_description} />
//                 <link rel="canonical" href={`https://www.wisbato.com/blogs/${detailedBlog?.slug}`} />
//             </Helmet>
//             {/* //// header meta tag */}

//             {isLoading ?
//                 <div className="detailed-blog-title-div">
//                     <p className="detailed-blog-title" ><Skeleton width={150} height={30} /></p>
//                     <Skeleton width={100} height={30} />
//                 </div>
//                 : <div className="detailed-blog-title-div">
//                     <p className="detailed-blog-title" >{detailedBlog?.title}</p>
//                     <button>
// <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M6.01472 15.8088C7.81776 15.8088 9.27942 14.3472 9.27942 12.5441C9.27942 10.7411 7.81776 9.27942 6.01472 9.27942C4.21167 9.27942 2.75001 10.7411 2.75001 12.5441C2.75001 14.3472 4.21167 15.8088 6.01472 15.8088Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//     <path d="M17.9853 9.27941C19.7883 9.27941 21.25 7.81775 21.25 6.01471C21.25 4.21166 19.7883 2.75 17.9853 2.75C16.1822 2.75 14.7206 4.21166 14.7206 6.01471C14.7206 7.81775 16.1822 9.27941 17.9853 9.27941Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//     <path d="M17.9853 21.25C19.7883 21.25 21.25 19.7883 21.25 17.9853C21.25 16.1822 19.7883 14.7206 17.9853 14.7206C16.1822 14.7206 14.7206 16.1822 14.7206 17.9853C14.7206 19.7883 16.1822 21.25 17.9853 21.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//     <path d="M15.0144 16.6359L8.9856 13.8935" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//     <path d="M15.1124 7.58176L8.88765 10.9771" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
// </svg>
//                         <p>share</p>
//                     </button>
//                 </div>}

//             <div className="detailed-blog-seperate-section">
//                 <div className='blog-title-navigate-section'>
//                     <p>table of content</p>
//                     <div className='blog-title-navigates'>
//                         {headings.map((item, i) => (
//                             <p key={i} onClick={() => handleTitleClick(item.id)}>{item.title}</p>
//                         ))}
//                     </div>
//                 </div>
//                 {isLoading ?
//                     <div className="subtitle-content-section" style={{ width: "100%" }} >
//                         <p className='paragraph' style={{ width: "100%" }} ><Skeleton count={3} /></p>
//                         {
//                             <div className="blog-points-section" style={{ width: "100%" }}>
//                                 <p className='numbered-list'><Skeleton height={30} /></p>
//                                 <p className='paragraph'><Skeleton count={3} /></p>

//                                 <Skeleton height={200} />
//                             </div>
//                         }
//                     </div>
//                     : <div>
//                         {
//                             <div ref={blogDetailRef} className="subtitle-content-section" dangerouslySetInnerHTML={{ __html: testHtml }} />
//                         }
//                     </div>}

//                 {
//                     isLoading ? <div className='sub-blogs-section' style={{ width: "100%" }} >
//                         <div className='sub-blogs'>
//                             <p><Skeleton width={100} /></p>

//                             {
//                                 Array.from({ length: 2 }).map((_, i) => <div key={i} className='sub-blog'>
//                                     <p><Skeleton height={130} /></p>
//                                     <p><Skeleton count={2} /></p>
//                                 </div>)
//                             }
//                         </div>
//                         <div className='sub-blogs'>
//                             <p><Skeleton width={100} /></p>

//                             {
//                                 Array.from({ length: 2 }).map((_, i) => <div key={i} className='sub-blog'>
//                                     <p><Skeleton height={130} /></p>
//                                     <p><Skeleton count={2} /></p>
//                                 </div>)
//                             }
//                         </div>
//                     </div> :
//                         <div className='sub-blogs-section' >
//                             <div className='sub-blogs'>
//                                 <p>recent posts</p>

//                                 {
//                                     blogs.slice(0, 3).map((item, i) => <div key={i} className='sub-blog'>
//                                         <img className='sub-blog-img' src={item.image} alt="" />
//                                         <p>{item.title}</p>
//                                     </div>)
//                                 }
//                             </div>
//                             <div className='sub-blogs'>
//                                 <p>popular posts</p>

//                                 {
//                                     blogs.slice(0, -1).map((item, i) => <div key={i} className='sub-blog'>
//                                         <img className='sub-blog-img' src={item.image} alt="" />
//                                         <p>{item.title}</p>
//                                     </div>)
//                                 }
//                             </div>
//                         </div>
//                 }
//             </div>
//         </div>
//     )
// }

// export default BlogDetailedSection;