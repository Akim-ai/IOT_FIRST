import React, { FC } from 'react';
import MenuLink, {MenuLinkProps} from "./MenuLink";
import MenuSearch from "../MenuSearch";

interface MenuLinkControllerProps {
    linkData: MenuLinkProps[]
}

const MenuLinkController: FC<MenuLinkControllerProps> = (props) => {
    function mapLinks(){
        return props.linkData.map((value, index) => {
            return (
                <>
                    {index === 2 ? <MenuSearch/> : <></>}
                    <MenuLink text={value.text} path={value.path}/>
                </>)
        })
    }
  return (
      <div className='
            w-2/5 flex justify-between
      '>
          {mapLinks()}
      </div>
  );
};

export default MenuLinkController;
export type {MenuLinkControllerProps}
