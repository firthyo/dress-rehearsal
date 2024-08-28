import styled from "styled-components";

export const SummaryContainer = styled.div`
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #333;
`;

export const Text = styled.p`
  margin: 0;
  color: #555;
`;

export const TotalText = styled.p`
  margin: 0;
  color: #333;
  font-weight: bold;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #ddd;
`;

export const ItemsList = styled.div`
  margin-top: 20px;
  
`;

export const ItemRow = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ItemImage = styled.img`
  width: 100px;
  height: auto;
  object-fit: cover;
  margin-right: 20px;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
`;

export const ItemName = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const ItemDetail = styled.span`
  font-size: 14px;
  margin-bottom: 4px;
`;
