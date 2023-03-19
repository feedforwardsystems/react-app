#!/bin/sh

echo "::debug ::Debug Message"
echo "::warning ::Warning Message"
echo "::error ::Error Message"
echo "HELL LO $1"

echo "::add-mask::$1"
echo "HELL LO $1"

time=$(date)
echo "::set-output name=time::$time"

echo "::group::Some expandable logs"
echo "AAA"
echo "BBB"
echo "::endgroup"

echo "::set-env name=HI::-H-I-"