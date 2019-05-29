# 批量转换webp格式为png

for i in *.webp; do dwebp $i -o ${i//webp/png} $i &>/dev/null; echo "Done with $i"; done

