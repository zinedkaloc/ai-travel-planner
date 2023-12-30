// import styled from "styled-components";
// export const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 4px;
//   margin-bottom: 16px;
// `;

// // Button component
// export const ActionButton = styled.button`
//   padding: 8px 16px;
//   border: none;
//   border-radius: 4px;
//   font-size: 12px;
//   font-weight: bold;
//   cursor: pointer;
//   margin: 0 4px;
//   color: #000;
//   background-color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.2s ease-in-out;
//   border: 1px solid transparent;

//   &::before {
//     content: "⬇️";
//     margin-right: 4px;
//     left: 8px;
//     top: 8px;
//   }

//   &:hover {
//     background-color: #dadada;
//     border: 1px solid #ccc;
//   }
// `;

// // export const InterestsContainerNew = styled.div`
// //   display: flex;
// //   flex-direction: row;
// //   align-items: flex-start;
// //   flex-wrap: wrap;
// //   width: 100%;
// // `;

// // export const InterestItemNew = styled.div`
// //   display: flex;
// //   font-size: 12px;
// //   align-items: center;
// //   padding: 4px;
// //   margin-right: 4px;
// //   margin-bottom: 4px;
// //   border: 1px solid transparent;
// //   cursor: pointer;
// //   transition: border-color 0.2s ease-in-out;
// //   border-radius: 0.4rem;

// //   &:hover {
// //     border-color: #333;
// //     border-radius: 0.4rem;
// //   }

// //   &.selected {
// //     border: 1px solid #007bff;
// //     border-radius: 0.4rem;
// //   }
// // `;

// // export const InterestName = styled.span`
// //   margin-left: 6px;
// //   margin-right: 6px;
// // `;

// // export const InterestEmoji = styled.span`
// //   font-size: 16px;
// // `;

// // export const Panel = styled.div`
// //   display: flex;
// //   flex-basis: 30%;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: center;
// //   padding: 1rem;
// //   border: 1px solid #ccc;
// //   background-color: #fff;
// //   position: fixed;
// //   width: 28%;
// //   top: 0;
// //   right: 0;
// //   overflow-y: auto;

// //   @media screen and (max-width: 1320px) {
// //     flex-basis: calc(40% - 2.2rem);
// //     width: calc(40% - 2.2rem);
// //     position: relative;
// //   }

// //   @media (max-width: 768px) {
// //     width: calc(100% - 2rem);
// //     margin: 0 auto;
// //   }

// //   @media (max-height: 500px) {
// //     width: calc(100% - 2rem);
// //     margin: 0 auto;
// //     overflow-y: scroll;
// //     position: relative;
// //   }
// // `;

// // export const CuisineTypesContainer = styled.div`
// //   display: flex;
// //   flex-direction: row;
// //   align-items: center;
// //   flex-wrap: wrap;
// // `;

// // export const CuisineType = styled.div`
// //   display: flex;
// //   flex-direction: row;
// //   justify-content: center;
// //   align-items: center;
// //   cursor: pointer;
// //   font-size: 0.8rem;
// //   padding: 0.4rem;
// //   margin-bottom: 5px;
// //   margin-right: 5px;
// //   border-radius: 0.4rem;
// //   border: 1px solid transparent;
// //   &.selected {
// //     border: 1px solid #007bff;
// //     border-radius: 0.4rem;
// //   }
// //   &:hover {
// //     border-color: #333;
// //     border-radius: 0.4rem;
// //   }
// // `;

// // export const InfoContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// //   margin: 2rem;
// // `;

// // export const Info = styled.div`
// //   margin: 1rem;
// //   padding: 2rem;
// //   border-radius: 8px;
// //   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
// //   background-color: #333;
// // `;

// // export const InfoTitle = styled.h2`
// //   font-size: 1.5rem;
// //   font-weight: 600;
// //   margin-bottom: 1.5rem;
// //   color: #fff;
// // `;

// // export const InfoText = styled.p`
// //   font-size: 1.2rem;
// //   margin-bottom: 1.5rem;
// //   color: #fff;
// // `;

// // // Lead form will remove later on

// // export const LeadForm = styled.form`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// // `;

// // export const LeadInput = styled.input`
// //   padding: 0.5rem;
// //   border-radius: 0.5rem 0 0 0.5rem;
// //   border: 2px solid #ccc;
// //   font-size: 1.2rem;
// //   width: 20rem;
// //   margin-bottom: 1rem;
// // `;

// // export const LeadButton = styled.button`
// //   padding: 0.5rem 1.5rem;
// //   background-color: #007bff;
// //   color: #fff;
// //   border-radius: 0.5rem;
// //   border: none;
// //   font-size: 1.2rem;
// //   cursor: pointer;

// //   &:hover {
// //     background-color: #0069d9;
// //   }
// // `;


// export const PinButton = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 4px 4px;
//   font-size: 12px;
//   letter-spacing: 0px;
//   color: #000;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.2s ease-in-out;
//   border: 1px solid transparent;

//   &::before {
//     content: "📍";
//     margin-right: 4px;
//     left: 8px;
//     top: 8px;
//   }

//   &:hover {
//     background-color: #f5f5f5;
//     border: 1px solid #ccc;
//   }
// `;

// export const ResponseContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// export const ResponseTitle = styled.h2`
//   font-size: 1.5rem;
//   font-weight: normal;
// // `;

// export const ResponseText = styled.div`
//   width: 80%;
//   font-size: 1rem;
//   font-weight: normal;
//   color: #fff;
//   border-radius: 0.4rem;
//   padding: 1rem;
//   margin: 2rem;
//   @media (max-width: 768px) {
//     width: calc(100% - 2rem);
//     font-size: 0.9rem;
//   }
//   img {
//     display: block;
//     margin: 0 auto;
//     max-width: 100%;
//     height: auto;
//   }

//   a {
//     color: #fff;
//     text-decoration: underline;
//   }
// `;
