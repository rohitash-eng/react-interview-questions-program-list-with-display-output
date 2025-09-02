import React from "react";
import "./amanPopup.css";
import { Divider } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const products = [
     {
          id: 1,
          image: "https://dummyimage.com/124x85/000/fff",
          title: "Samsung 65 Class DU6900",
          rating: 4,
          reviewCount: 777,
          shippingInfo: "Free Shipping",
          delivery: 'in 3+ days'
     },
     {
          id: 1,
          image: "https://dummyimage.com/124x85/000/fff",
          title: "LG TV 65 Class DU6900",
          rating: 4,
          reviewCount: 777,
          shippingInfo: "Free Pickup",
          delivery: 'Today'
     },
];
const favorites = [
     {
          imageUrl: "https://dummyimage.com/124x85/000/fff",
          title: "Samsung 65 Class DU6900"
     },
     {
          imageUrl: "https://dummyimage.com/124x85/000/fff",
          title: "VIZIO 75 Class 4K UHD"
     },
];
const AmanPopup = () => {
     return (
          <div className="popup-container" style={{
               position: 'fixed',
               bottom: 0,
               top: '135px',
               right: 0,
               width: '100%',
               display: 'flex',
               flexDirection: 'row',
               backgroundColor: '#fff',
               borderLeft: '1px solid #ccc',
               boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.1)',
               zIndex: '1000',
               border: '2px solid #000',
          }}>
               <div className="ask-sparky-section" style={{
                    flex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    borderBottom: '1px solid #ddd',
                    borderRight: '3px solid #ddd',
               }}>
                    <div className="header" style={{
                         fontWeight: 'bold',
                         background: '#0D2E54',
                         color: '#fff',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'right',
                         padding: '5px 15px',
                    }}>
                         <div className="smile-face" style={{
                              marginRight: '8px',
                              fontSize: '16px',
                              fontWeight: 'bold',
                         }}>
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="60"
                                   height="60"
                                   viewBox="0 0 60 60"
                                   fill="none"
                              >
                                   <path
                                        d="M30.0002 59.7988C13.4318 59.7988 0 46.4124 0 29.8996C0 13.3864 13.4318 -3.8147e-05 30.0002 -3.8147e-05C46.5685 -3.8147e-05 60 13.3864 60 29.8996C60 46.4124 46.5685 59.7988 30.0002 59.7988Z"
                                        fill="#FFB700"
                                   />
                                   <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.0771 27.5996C5.0771 44.1125 18.5083 57.499 35.0771 57.499C38.5124 57.499 41.8129 56.9235 44.8867 55.864C40.4998 58.3677 35.4177 59.7989 30.0002 59.7989C13.4314 59.7989 0.000175476 46.4124 0.000175476 29.8995C0.000175476 16.8101 8.43912 5.68531 20.1904 1.63477C11.1609 6.78828 5.0771 16.4858 5.0771 27.5996Z"
                                        fill="#EBA100"
                                   />
                                   <path
                                        d="M16.2335 49.659C15.7314 49.4558 16.0658 47.9967 16.9804 46.3997C17.8951 44.803 19.0437 43.673 19.5458 43.8761C20.0481 44.079 19.7138 45.5384 18.7991 47.1351C17.8842 48.7321 16.7358 49.8622 16.2335 49.659Z"
                                        fill="#001C6B"
                                   />
                                   <path
                                        d="M52.9113 42.4232C50.8789 46.9646 46.2666 49.7855 41.6634 51.2095C35.3682 53.1408 28.4717 52.2863 22.5406 49.5519C21.0038 48.8621 19.5221 48.0477 18.0698 47.1958L17.3965 48.0704C18.666 49.2879 20.0807 50.3687 21.5963 51.3074C26.211 54.1561 31.7397 55.5042 37.1712 54.89C43.397 54.1875 49.8562 50.9491 52.7071 45.1639C53.093 44.3508 53.3727 43.4813 53.5202 42.5953L52.9099 42.4219L52.9113 42.4232Z"
                                        fill="#001C6B"
                                   />
                                   <path
                                        d="M54.0598 41.8741C54.5755 43.8823 54.4859 44.6472 54.0762 44.7642C53.6664 44.8812 53.0954 43.6584 52.524 42.1354C51.9265 40.542 51.8054 39.4388 52.2795 39.2791C52.6226 39.1635 53.5568 39.9114 54.0611 41.8741H54.0598Z"
                                        fill="#001C6B"
                                   />
                                   <path
                                        d="M52.9113 42.4232C50.8789 46.9646 46.2666 49.7855 41.6634 51.2095C35.3682 53.1408 28.4717 52.2863 22.5406 49.5519C21.0038 48.8621 19.5221 48.0477 18.0698 47.1958L17.3965 48.0704C18.666 49.2879 20.0807 50.3687 21.5963 51.3074C26.211 54.1561 31.7397 55.5042 37.1712 54.89C43.397 54.1875 49.8562 50.9491 52.7071 45.1639C53.093 44.3508 53.3727 43.4813 53.5202 42.5953L52.9099 42.4219L52.9113 42.4232Z"
                                        fill="#001C6B"
                                   />
                                   <path
                                        d="M29.871 37.4268C29.585 40.9729 29.6755 43.4974 30.5265 43.589C31.3776 43.6809 32.3587 42.1038 33.0055 37.7637C33.5008 34.4348 33.3673 31.5474 31.838 31.4718C30.8457 31.4227 30.1433 34.0728 29.871 37.4268Z"
                                        fill="#001C6B"
                                   />
                                   <path
                                        d="M45.6382 35.1657C45.3897 38.9384 45.1003 40.7998 45.9386 40.8951C46.7773 40.99 47.8741 39.0684 48.2466 35.426C48.5672 32.296 48.2466 29.2996 47.1102 29.5613C46.2357 29.7628 45.8444 32.0253 45.6382 35.1657Z"
                                        fill="#001C6B"
                                   />
                              </svg>

                         </div>
                         <h3>Ask Sparky</h3>
                    </div>

                    <div className="content" style={{
                         flex: 1,
                         display: 'flex',
                         flexDirection: 'row',
                         overflowY: 'auto',
                    }}>
                         {/* My Conversations */}
                         <div className="my-conversations" style={{
                              flex: '1 1',
                              borderRight: '3px solid #ddd',
                              padding: '5px',

                         }}>
                              <div className="filter-sub-section" style={{
                                   display: 'flex',
                                   justifyContent: 'space-between',
                                   alignItems: 'center',
                              }}>
                                   <h2 className="header-h2" style={{
                                        margin: 0,
                                        padding: '5px',
                                        textAlign: 'left',
                                        fontFamily: 'ui-monospace',
                                   }}>My Conversations</h2>
                                   <div className="dropdown-icon" style={
                                        {
                                             marginTop: '25px',
                                        }
                                   }>
                                        {/* <Icon name="CaretDown" size="medium" /> */}
                                        <ArrowDropDownIcon />
                                   </div>
                              </div>
                              <div className="divider-cl" style={{
                                   margin: '8px 0',
                                   flexShrink: 0,
                                   border: 0,
                                   borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                                   width: '100%',
                              }} />
                              <div className="sparky-product-list">
                                   <ul style={{
                                        listStyle: 'none',
                                        padding: '5px',
                                   }}>
                                        <li style={{
                                             display: 'flex',
                                             justifyContent: 'space-between',
                                             fontSize: '14px',
                                             marginBottom: '8px',
                                             fontWeight: '500',
                                        }}>4K TVs <span className="my-date" style={{
                                             fontSize: '12px',
                                             color: '#ccc',
                                        }}>Dec 4th</span></li>
                                        <li style={{
                                             display: 'flex',
                                             justifyContent: 'space-between',
                                             fontSize: '14px',
                                             marginBottom: '8px',
                                             fontWeight: '500',
                                        }}>Gift for 3yo boy <span style={{
                                             fontSize: '12px',
                                             color: '#ccc',
                                        }} className="my-date">Oct 25th</span></li>
                                        <li style={{
                                             display: 'flex',
                                             justifyContent: 'space-between',
                                             fontSize: '14px',
                                             marginBottom: '8px',
                                             fontWeight: '500',
                                        }}>Leaf blower <span style={{
                                             fontSize: '12px',
                                             color: '#ccc',
                                        }} className="my-date">Aug 9th</span></li>
                                        <li style={{
                                             display: 'flex',
                                             justifyContent: 'space-between',
                                             fontSize: '14px',
                                             marginBottom: '8px',
                                             fontWeight: '500',
                                        }}>Jeans <span style={{
                                             fontSize: '12px',
                                             color: '#ccc',
                                        }} className="my-date">Oct 25th</span></li>
                                   </ul>
                              </div>
                         </div>

                         {/* Filters and My Favorites */}
                         <div className="filters-favorites" style={{
                              flex: '1 1',
                              padding: '5px',
                         }}>
                              {/* Filters Section */}
                              <div className="filters">

                                   <div className="filter-sub-section" style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                   }}>
                                        <h2 className="header-h4" style={{
                                             margin: 0,
                                             padding: '2.5px',
                                             textAlign: 'left',
                                             fontFamily: 'ui-monospace',
                                        }}>Filters</h2>
                                        <div className="dropdown-icon">
                                             {/* <Icon name="CaretDown" size="medium" /> */}
                                             <ArrowDropDownIcon />
                                        </div>
                                   </div>

                                   <div className="divider-cl" style={{
                                        margin: '8px 0',
                                        flexShrink: 0,
                                        border: 0,
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                                        width: '100%',
                                   }} />

                                   <div className="filter-content">
                                        <div className="filter-tags" style={{
                                             display: 'flex',
                                             flexWrap: 'wrap',
                                             gap: '5px',
                                        }}>
                                             <span style={{
                                                  backgroundColor: '#DAE8FC',
                                                  padding: '5px 10px',
                                                  borderRadius: '15px',
                                                  fontSize: '12px',
                                             }}>48" - 75"</span>
                                             <span style={{
                                                  backgroundColor: '#DAE8FC',
                                                  padding: '5px 10px',
                                                  borderRadius: '15px',
                                                  fontSize: '12px',
                                             }}>21lbs - 55lbs</span>
                                             <span style={{
                                                  backgroundColor: '#DAE8FC',
                                                  padding: '5px 10px',
                                                  borderRadius: '15px',
                                                  fontSize: '12px',
                                             }}>OLED</span>
                                             <span style={{
                                                  backgroundColor: '#DAE8FC',
                                                  padding: '5px 10px',
                                                  borderRadius: '15px',
                                                  fontSize: '12px',
                                             }}>$650 - $1200</span>
                                             <span style={{
                                                  backgroundColor: '#D5E7D4',
                                                  padding: '5px 10px',
                                                  borderRadius: '15px',
                                                  fontSize: '12px',
                                             }}>Casting</span>
                                             <span style={{
                                                  backgroundColor: '#D5E7D4',
                                                  padding: '5px 10px',
                                                  borderRadius: '15px',
                                                  fontSize: '12px',
                                             }}>Android TV</span>
                                        </div>

                                        <div className="divider-cl" style={{
                                             margin: '8px 0',
                                             flexShrink: 0,
                                             border: 0,
                                             borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                                             width: '100%',
                                        }} />

                                        <div className="apply-css" style={{ display: 'flex', justifyContent: 'right', }}>
                                             <button className="add-filter" style={{
                                                  backgroundColor: '#FFE6CC',
                                                  color: 'black',
                                                  padding: '5px 10px',
                                                  border: 'none',
                                                  borderRadius: '15px',
                                                  fontSize: '12px',
                                                  cursor: 'pointer',
                                             }}>Add filter</button>
                                        </div>
                                   </div>

                              </div>

                              {/* My Favorites Section */}
                              <div className="my-favorites">
                                   <div className="filter-sub-section" style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: '20px',
                                   }}>
                                        <h2 className="header-h2" style={{
                                             margin: 0,
                                             padding: '5px',
                                             textAlign: 'left',
                                        }}>My Favorites</h2>
                                        <div className="dropdown-icon" style={
                                             {
                                                  marginTop: '5px',
                                             }
                                        }>
                                             {/* <Icon name="CaretDown" size="medium" /> */}
                                             <ArrowDropDownIcon />
                                        </div>
                                   </div>

                                   <div className="divider-cl" style={{
                                        margin: '8px 0',
                                        flexShrink: 0,
                                        border: 0,
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                                        width: '100%',
                                   }} />

                                   <div className="favorites-grid" style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '4px',
                                        justifyContent: 'space-between',
                                   }}>
                                        {favorites.map((favorite) => (
                                             <div key={favorite.title} className="favorite-item" style={{
                                                  flex: '1 1 calc(33.33% - 16px)',
                                                  maxWidth: 'calc(33.33% - 16px)',
                                                  minWidth: 'calc(55% - 16px)',
                                                  display: 'flex',
                                                  flexDirection: 'column',
                                                  alignItems: 'center',
                                                  padding: '1px',
                                                  borderRadius: '8px',
                                                  boxSizing: 'border-box',
                                             }}>
                                                  <div className="fav-img" style={{
                                                       marginBottom: '8px',
                                                  }}>
                                                       <img src={favorite.imageUrl} style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                            borderRadius: '4px',
                                                       }} alt={favorite.title} />
                                                  </div>
                                                  <div className="fav-img-title" style={{
                                                       fontSize: '4px',
                                                       textAlign: 'center',
                                                       background: '#268ECC',
                                                       color: '#fff',
                                                       borderRadius: '5px',
                                                       padding: '3px',
                                                       width: '100%',
                                                  }}>
                                                       {favorite.title}
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* Chat section with product list */}

               <div className="chat-section">
                    <div className="chat-messages">
                         <ul className="chat-scroll-container">
                              <li className="chat-left">
                                   <div className="left-message-section">
                                        <div className="chat-avatar">
                                             <img
                                                  src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                                                  alt="test"
                                                  className="chat-avatar-img"
                                             />
                                             <div className="chat-name">Russell</div>
                                        </div>
                                        <div className="chat-text">
                                             Ok, here is what I found based on your filters:
                                        </div>
                                        <div className="chat-hour">
                                             08:55 <span className="fa fa-check-circle"></span>
                                        </div>
                                   </div>


                                   <div className="product-list">
                                        {products.map((product) => (
                                             <div
                                                  className="product-section"
                                                  key={product.id}
                                             >
                                                  <div
                                                       className="product-fav-img"
                                                       style={{
                                                            marginBottom: "8px",
                                                            display: "flex",
                                                       }}
                                                  >
                                                       <img
                                                            src={product.image}
                                                            alt={product.title}
                                                            style={{
                                                                 width: "100%",
                                                                 height: "auto",
                                                                 borderRadius: "4px",
                                                            }}
                                                       />
                                                  </div>
                                                  <div className="product-img-title-section-main">
                                                       <div className="product-img-title">
                                                            {product.title}
                                                            <span className="price-container">
                                                                 <span className="current-price"> Now <span className="price-dollar">$</span>477<span className="price-suf">00</span></span>
                                                            </span>
                                                            <span className="original-price"> $598.00</span>
                                                       </div>
                                                       <div
                                                            className="product-img-title-stars">
                                                            {Array.from({ length: 5 }, (_, index) => (
                                                                 <span
                                                                      key={index}
                                                                      style={{
                                                                           color: index < product.rating ? "#000" : "#ccc",
                                                                           fontSize: "16px",
                                                                      }}
                                                                 >
                                                                      ★
                                                                 </span>
                                                            ))}
                                                            <span
                                                                 className="review-count"
                                                                 style={{ marginLeft: "5px", fontSize: "12px", color: "#666" }}
                                                            >
                                                                 {product.reviewCount}
                                                            </span>
                                                       </div>
                                                       <div className="product-shipping-section">
                                                            {product.shippingInfo}<span className="delivery-time">, {product.delivery}</span>
                                                       </div>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </li>



                              <li className="chat-right">
                                   <div className="right-message-section">
                                        <div className="chat-hour">
                                             08:55 <span className="fa fa-check-circle"></span>
                                        </div>
                                        <div className="chat-text">
                                             Ok, here is what I found based on your filters:
                                        </div>
                                        <div className="chat-avatar">
                                             <img
                                                  src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                                                  alt="test"
                                                  className="chat-avatar-img"
                                             />
                                             <div className="chat-name">Russell</div>
                                        </div>

                                   </div>


                                   <div className="product-list">
                                        {products.map((product) => (
                                             <div
                                                  className="product-section"
                                                  key={product.id}
                                             >
                                                  <div
                                                       className="product-fav-img"
                                                       style={{
                                                            marginBottom: "8px",
                                                            display: "flex",
                                                       }}
                                                  >
                                                       <img
                                                            src={product.image}
                                                            alt={product.title}
                                                            style={{
                                                                 width: "100%",
                                                                 height: "auto",
                                                                 borderRadius: "4px",
                                                            }}
                                                       />
                                                  </div>
                                                  <div className="product-img-title-section-main">
                                                  <div className="product-img-title">
                                                            {product.title}
                                                            <span className="price-container">
                                                                 <span className="current-price"> Now <span className="price-dollar">$</span>477<span className="price-suf">00</span></span>
                                                            </span>
                                                            <span className="original-price"> $598.00</span>
                                                       </div>
                                                       <div className="product-img-title-stars">
                                                            {Array.from({ length: 5 }, (_, index) => (
                                                                 <span
                                                                      key={index}
                                                                      style={{
                                                                           color: index < product.rating ? "#FFD700" : "#ccc",
                                                                           fontSize: "16px",
                                                                      }}
                                                                 >
                                                                      ★
                                                                 </span>
                                                            ))}
                                                            <span
                                                                 className="review-count"
                                                                 style={{ marginLeft: "5px", fontSize: "12px", color: "#666" }}
                                                            >
                                                                 ({product.reviewCount})
                                                            </span>
                                                       </div>
                                                       <div className="product-shipping-section" style={{ fontSize: "12px", color: "#444", marginTop: "5px" }}>
                                                       {product.shippingInfo}<span className="delivery-time">, {product.delivery}</span>
                                                       </div>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>

                              </li>
                         </ul>
                    </div>

                    <div className="chat-input" style={{
                         display: 'flex',
                         padding: '10px',
                         borderTop: '1pxsolid #ddd',
                         marginRight: 20,
                    }}>
                         <input
                              type="text"
                              style={{
                                   flex: 1,
                                   padding: "10px",
                                   border: "1px solid #ddd",
                                   borderRadius: "5px",
                              }}
                              placeholder="Type your message here"
                         />
                         <button
                              style={{
                                   backgroundColor: "#007bff",
                                   color: "#fff",
                                   padding: "10px 15px",
                                   border: "none",
                                   borderRadius: "5px",
                                   marginLeft: "25px",
                                   cursor: "pointer",
                              }}
                         >
                              Send Message
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default AmanPopup;