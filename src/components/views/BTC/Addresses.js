import React, { Component } from 'react'
import styled from 'styled-components'
import { createObserver, collect } from 'dop'

import { routes } from '/store/router'
import styles from '/const/styles'

import state from '/store/state'
// import { assetDelete, addNotification, setHref } from '/store/actions'
// import { getParamsFromLocation } from '/store/getters'

import Div from '/components/styled/Div'
import ButtonBig from '/components/styled/ButtonBig'
import RadioButton from '/components/styled/RadioButton'
// import CenterElement from '/components/styled/CenterElement'

export default class Addresses extends Component {
    componentWillMount() {
        this.observer = createObserver(m => this.forceUpdate())
        this.observer.observe(state.view)

        // Initial state
        state.view = {}

        // binding
        // this.onChangeEncryption = this.onChangeEncryption.bind(this)
    }

    render() {
        return React.createElement(AddressesTemplate, {})
    }
}

function AddressesTemplate({}) {
    return (
        <Div>
            <Transactions>
                {[1, 2, 3].map(tx => {
                    return (
                        <Transaction selected={true}>
                            <TransactionInner onClick={e => {}}>
                                <TransactionItemButton>
                                    <RadioButton />
                                </TransactionItemButton>
                                <TransactionItem>
                                    1EnzoCZwyi9c4FNZAupF5ea9wC8uQUf75T
                                </TransactionItem>
                                <TransactionItemRight>
                                    5.131131 BTC
                                </TransactionItemRight>
                            </TransactionInner>
                        </Transaction>
                    )
                })}
            </Transactions>
        </Div>
    )
}

export const Transactions = styled.div`
    clear: both;
`

export const Transaction = styled.div`
    clear: both;
    color: ${styles.color.front3};
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: ${props =>
        props.selected ? styles.color.background1 : 'transparent'};
    &:hover {
        background-color: ${styles.color.background1};
    }
`

export const TransactionInner = styled.div`
    height: 32px;
    padding: 12px 12px 0 12px;
`

export const TransactionItemButton = styled.div`
    float: left;
    margin-right: 10px;
    padding-left: 5px;
    padding-top: 1px;
`
export const TransactionItem = styled.div`
    float: left;
    font-weight: bold;
`
export const TransactionItemRight = styled.div`
    float: right;
    font-weight: bold;
`