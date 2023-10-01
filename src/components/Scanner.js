import React, { Component, useState } from 'react'
import QrReader from 'react-qr-scanner'

export default function Scanner({ReportAdance}) {

    const [delay, setDelay] = useState({
        delay: 100,
        result: 'No result',
    })

   function handleScan(data){
        if(data){
            ReportAdance(data)
        }
    }

  function  handleError(err){
        console.error(err)
    }
    
    const previewStyle = {
            height: 240,
            width: 320,
        }

        return (
            <div>
                <QrReader
                    delay={delay.delay}
                    style={previewStyle}
                    onError={handleError}
                    onScan={handleScan}
                />
            </div>
        )
    }