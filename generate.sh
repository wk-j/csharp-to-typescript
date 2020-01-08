OUTDIR=output
INFILE=swagger.json

rm -rf $OUTDIR
rm $INFILE

wget https://localhost:5001/swagger/v1/swagger.json --no-check-certificate --output-document $INFILE

openapi-generator generate \
    -i $INFILE \
    -g typescript-axios \
    -c config.json \
    -o $OUTDIR