#!/bin/sh

SHTTR_BIN="/usr/local/apache2/htdocs/bin"
SHTTR_LIB="/usr/local/apache2/htdocs/lib"
SHTTR_APP="/usr/local/apache2/htdocs/app"
SHTTR_ASSETS="/app/assets"
export SHTTR_BIN
export SHTTR_LIB
export SHTTR_APP
export SHTTR_ASSETS

sh ${SHTTR_BIN}/shttr
