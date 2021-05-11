./autogen.sh
./configure --prefix=/usr/local/Cellar/protobuf/3.10.0
make
make check
sudo make install