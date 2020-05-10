import styled from 'styled-components'
export const ProductCardStyled = styled.div`
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background: #fff;
  min-height: 150px;
  margin: 20px;
  &:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  background: #fff;
}
.header-product{
    padding: 10px;
}
.price-discount{
    font-size: 15px;
   
}
.promo{
        color: red;
    }

`