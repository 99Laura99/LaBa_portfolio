import React from "react";
import "./Apie_komponentai/Apie.css";
import nuotrauka from "./Apie_komponentai/mano.jpg";

function Apie() {
    return (
        <div className="main container-fluid text-white d-flex flex-column position-relative p-0 m-0">
            <div className="kazkas row">
                 
                <div className="virsus col-12 col-md-9 " >

                    <div className="headeris row">
                        <div className="head d-flex justify-content-between align-items-center w-100">
                            <a href="/" className="atgal text-white fs-1 text-decoration-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="30" viewBox="0 0 17 30" fill="none">
                                    <path d="M0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585786 13.5858ZM2 17H4V13H2V17Z" fill="#ACACAC"/>
                                </svg>
                            </a>
                            <p className="pav fs-1 text-decoration-none">
                                APIE
                            </p>
                        </div>
                    </div>

                    <div className="linijaApie col-12 col-md-9"></div>
                    <br />

                    <div className="kontaktai col-12 col-md-3">
                        <p>KONTAKTAI</p>
                        
                        <p className="facebdesk">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.033 30H14.967C6.71428 30 0 23.2857 0 15.033V14.967C0 6.71428 6.71428 0 14.967 0H15.033C23.2857 0 30 6.71428 30 14.967V15.033C30 23.2857 23.2857 30 15.033 30ZM14.967 1.01547C7.2738 1.01547 1.01547 7.27381 1.01547 14.967V15.033C1.01547 22.7262 7.2738 28.9845 14.967 28.9845H15.033C22.7262 28.9845 28.9845 22.7262 28.9845 15.033V14.967C28.9845 7.27381 22.7262 1.01547 15.033 1.01547H14.967Z" fill="#717171"/>
                                <path d="M17.0182 11.6363V14.7933H20.9237L20.3053 19.0461H17.0182V28.8444C16.3592 28.9358 15.6849 28.9835 15.0005 28.9835C14.2105 28.9835 13.4346 28.9206 12.6791 28.7987V19.0461H9.07726V14.7933H12.6791V10.9305C12.6791 8.534 14.6217 6.59039 17.0192 6.59039V6.59241C17.0263 6.59241 17.0324 6.59039 17.0395 6.59039H20.9247V10.2684H18.3861C17.6316 10.2684 17.0192 10.8807 17.0192 11.6352L17.0182 11.6363Z" fill="#717171"/>
                            </svg>
                            <a href="https://www.facebook.com/profile.php?id=100008375592754" target="_blank" rel="noreferrer" className="socialm text-decoration-none">  Laura Baltėnaitė</a>
                        </p>
                        
                        <p className="instadesk">
                           <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15" cy="15" r="14.5" stroke="#717171"/>
                                <path d="M19.4954 6H10.5046C8.0207 6 6 8.11045 6 10.7047V19.2953C6 21.8895 8.0207 24 10.5046 24H19.4954C21.9793 24 24 21.8895 24 19.2953V10.7047C24 8.11045 21.9793 6 19.4954 6ZM7.58908 10.7047C7.58908 9.02587 8.89718 7.65966 10.5046 7.65966H19.4954C21.1028 7.65966 22.4109 9.02587 22.4109 10.7047V19.2953C22.4109 20.9741 21.1028 22.3403 19.4954 22.3403H10.5046C8.89718 22.3403 7.58908 20.9741 7.58908 19.2953V10.7047Z" fill="#717171"/>
                                <path d="M15 19.3751C17.3098 19.3751 19.1901 17.4125 19.1901 14.999C19.1901 12.5855 17.3109 10.6229 15 10.6229C12.6892 10.6229 10.81 12.5855 10.81 14.999C10.81 17.4125 12.6892 19.3751 15 19.3751ZM15 12.2836C16.4344 12.2836 17.601 13.502 17.601 15.0001C17.601 16.4981 16.4344 17.7166 15 17.7166C13.5657 17.7166 12.3991 16.4981 12.3991 15.0001C12.3991 13.502 13.5657 12.2836 15 12.2836Z" fill="#717171"/>
                                <path d="M19.5779 11.3299C20.1999 11.3299 20.7068 10.8015 20.7068 10.1508C20.7068 9.50015 20.2009 8.97174 19.5779 8.97174C18.9549 8.97174 18.449 9.50015 18.449 10.1508C18.449 10.8015 18.9549 11.3299 19.5779 11.3299Z" fill="#717171"/>
                            </svg>
                            <a href="https://www.instagram.com/_laurute99_/" target="_blank" rel="noreferrer" className="socialm text-decoration-none"> _laurute99_</a>
                        </p>

                        <p className="gmaildesk">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.8066 8.29314C21.6281 7.60269 22.8539 7.70902 23.5444 8.53044C23.827 8.86673 23.9736 9.27087 23.9949 9.67814H24V20.9281C24 21.6059 23.4502 22.1557 22.7725 22.1557H20.7275C20.647 22.1557 20.5669 22.1396 20.4924 22.1088C20.418 22.078 20.3502 22.0332 20.2932 21.9762C20.2363 21.9193 20.1915 21.8514 20.1606 21.777C20.1298 21.7026 20.1138 21.6225 20.1138 21.5419V13.9526L15.5266 17.8088C15.3792 17.9326 15.1926 17.9999 15 17.9999C14.8074 17.9999 14.6208 17.9327 14.4734 17.8088L9.88623 13.9526V21.5419C9.88623 21.6225 9.87019 21.7026 9.83936 21.777C9.80852 21.8514 9.7637 21.9193 9.70679 21.9762C9.64984 22.0332 9.58196 22.078 9.50757 22.1088C9.43312 22.1396 9.35304 22.1557 9.27246 22.1557H7.22754C6.54978 22.1557 6 21.6059 6 20.9281V9.67814H6.00513C6.02636 9.27086 6.17295 8.86669 6.45557 8.53044C7.14607 7.70894 8.37181 7.60274 9.19336 8.29314L15 13.174L20.8066 8.29314Z" fill="#717171"/>
                                <circle cx="15" cy="15" r="14.5" stroke="#717171"/>
                            </svg>
                            <a href="mailto:l.baltenaite@gmail.com?subject=Uzklausa is Portfolio" className="socialm text-decoration-none"> l.baltenaite@gmail.com</a>
                        </p>

                        <p className="facebmobile">
                            <a href="https://www.facebook.com/profile.php?id=100008375592754" target="_blank" rel="noreferrer" className="socialm text-decoration-none">  Laura Baltėnaitė </a>
                            <svg width="15" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.033 30H14.967C6.71428 30 0 23.2857 0 15.033V14.967C0 6.71428 6.71428 0 14.967 0H15.033C23.2857 0 30 6.71428 30 14.967V15.033C30 23.2857 23.2857 30 15.033 30ZM14.967 1.01547C7.2738 1.01547 1.01547 7.27381 1.01547 14.967V15.033C1.01547 22.7262 7.2738 28.9845 14.967 28.9845H15.033C22.7262 28.9845 28.9845 22.7262 28.9845 15.033V14.967C28.9845 7.27381 22.7262 1.01547 15.033 1.01547H14.967Z" fill="#717171"/>
                                <path d="M17.0182 11.6363V14.7933H20.9237L20.3053 19.0461H17.0182V28.8444C16.3592 28.9358 15.6849 28.9835 15.0005 28.9835C14.2105 28.9835 13.4346 28.9206 12.6791 28.7987V19.0461H9.07726V14.7933H12.6791V10.9305C12.6791 8.534 14.6217 6.59039 17.0192 6.59039V6.59241C17.0263 6.59241 17.0324 6.59039 17.0395 6.59039H20.9247V10.2684H18.3861C17.6316 10.2684 17.0192 10.8807 17.0192 11.6352L17.0182 11.6363Z" fill="#717171"/>
                            </svg>
                        </p>

                        <p className="instamobile">
                            <a href="https://www.instagram.com/_laurute99_/" target="_blank" rel="noreferrer" className="socialm text-decoration-none"> _laurute99_ </a>
                            <svg width="15" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15" cy="15" r="14.5" stroke="#717171"/>
                                <path d="M19.4954 6H10.5046C8.0207 6 6 8.11045 6 10.7047V19.2953C6 21.8895 8.0207 24 10.5046 24H19.4954C21.9793 24 24 21.8895 24 19.2953V10.7047C24 8.11045 21.9793 6 19.4954 6ZM7.58908 10.7047C7.58908 9.02587 8.89718 7.65966 10.5046 7.65966H19.4954C21.1028 7.65966 22.4109 9.02587 22.4109 10.7047V19.2953C22.4109 20.9741 21.1028 22.3403 19.4954 22.3403H10.5046C8.89718 22.3403 7.58908 20.9741 7.58908 19.2953V10.7047Z" fill="#717171"/>
                                <path d="M15 19.3751C17.3098 19.3751 19.1901 17.4125 19.1901 14.999C19.1901 12.5855 17.3109 10.6229 15 10.6229C12.6892 10.6229 10.81 12.5855 10.81 14.999C10.81 17.4125 12.6892 19.3751 15 19.3751ZM15 12.2836C16.4344 12.2836 17.601 13.502 17.601 15.0001C17.601 16.4981 16.4344 17.7166 15 17.7166C13.5657 17.7166 12.3991 16.4981 12.3991 15.0001C12.3991 13.502 13.5657 12.2836 15 12.2836Z" fill="#717171"/>
                                <path d="M19.5779 11.3299C20.1999 11.3299 20.7068 10.8015 20.7068 10.1508C20.7068 9.50015 20.2009 8.97174 19.5779 8.97174C18.9549 8.97174 18.449 9.50015 18.449 10.1508C18.449 10.8015 18.9549 11.3299 19.5779 11.3299Z" fill="#717171"/>
                            </svg>
                        </p>

                         <p className="gmailmobile">
                            <a href="mailto:l.baltenaite@gmail.com?subject=Uzklausa is portfolio"  className="socialm text-decoration-none">  l.baltenaite@gmail.com </a>
                            <svg width="15" height="15" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.8066 8.29314C21.6281 7.60269 22.8539 7.70902 23.5444 8.53044C23.827 8.86673 23.9736 9.27087 23.9949 9.67814H24V20.9281C24 21.6059 23.4502 22.1557 22.7725 22.1557H20.7275C20.647 22.1557 20.5669 22.1396 20.4924 22.1088C20.418 22.078 20.3502 22.0332 20.2932 21.9762C20.2363 21.9193 20.1915 21.8514 20.1606 21.777C20.1298 21.7026 20.1138 21.6225 20.1138 21.5419V13.9526L15.5266 17.8088C15.3792 17.9326 15.1926 17.9999 15 17.9999C14.8074 17.9999 14.6208 17.9327 14.4734 17.8088L9.88623 13.9526V21.5419C9.88623 21.6225 9.87019 21.7026 9.83936 21.777C9.80852 21.8514 9.7637 21.9193 9.70679 21.9762C9.64984 22.0332 9.58196 22.078 9.50757 22.1088C9.43312 22.1396 9.35304 22.1557 9.27246 22.1557H7.22754C6.54978 22.1557 6 21.6059 6 20.9281V9.67814H6.00513C6.02636 9.27086 6.17295 8.86669 6.45557 8.53044C7.14607 7.70894 8.37181 7.60274 9.19336 8.29314L15 13.174L20.8066 8.29314Z" fill="#717171"/>
                                <circle cx="15" cy="15" r="14.5" stroke="#717171"/>
                            </svg>
                        </p>
                    </div>

                    <div className="apr col-12 col-md-8 position-absolute end-0 text-end">
                        <div className="laba">
                            <div><p className="par">La.Ba!</p></div>
                            <p>mano vardas Laura. <br />baigiau multimedijos ir kompiuterinio dizaino studijas ir įgijau informatikos inžinerijos bakalauro laipsnį.
                            <br />mano kūrybinis kelias prasidėjo nuo fotografijos, kuri išmokė matyti pasaulį per kadrų kompoziciją.<br />
                            studijos suteikė žinias ir įgūdžius šias vizijas perkelti į skaitmeninę erdvę.</p> <br />
                            <p>TECHNINIAI ĮGŪDŽIAI<br />
                            React / JavaScript / HTML & CSS / Bootstrap / Tailwind /<br /> Adobe Photoshop / Illustrator / After Effects /<br /> Figma / Blender / Unity</p>
                        </div>
                    </div>
                    
                </div>

                <div className="aprMob">
                    <div className="labaMob">
                        <div><p className="parMob">La.Ba!</p></div>
                        <p>Mano vardas Laura. <br />Baigiau multimedijos ir kompiuterinio dizaino studijas ir įgijau <br /> informatikos inžinerijos bakalauro laipsnį.
                        <br />Mano kūrybinis kelias prasidėjo nuo fotografijos, kuri išmokė <br /> matyti pasaulį per kadrų kompoziciją.<br />
                        Studijos suteikė žinias ir įgūdžius šias vizijas perkelti <br /> į skaitmeninę erdvę.</p> <br />
                        <p>TECHNINIAI ĮGŪDŽIAI<br />
                        React / JavaScript / HTML & CSS / Bootstrap / Tailwind / <br /> Adobe Photoshop / Illustrator / After Effects /<br /> Figma / Blender / Unity</p>
                    </div>
                </div>
                
                <div className="fotoContainer col-12 col-md-3">
                    <img src={nuotrauka} alt="nuotrauka" className="foto" />
                </div>

            </div>
        </div>
    );
}
export default Apie;